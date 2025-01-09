'use client'

import React, { useRef, useEffect } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0, 1);
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float iTime;

  // the black in the lower left. black
  const vec3 bottom = vec3(0.0, 0.0, 0.0);
  // the blue in the top right. TW: blue-950
  const vec3 top = vec3(0.09, 0.15, 0.33);
  const float widthFactor = 2.0;

  vec3 calcSine(vec2 uv, float speed, 
                float frequency, float amplitude, float shift, float offset,
                vec3 color, float width, float exponent, bool dir)
  {
      float angle = iTime * speed * frequency * -1.0 + (shift + uv.x) * 2.4;
      
      float y = sin(angle) * amplitude + offset;
      float clampY = clamp(0.0, y, y);
      float diffY = y - uv.y;
      
      float dsqr = distance(y, uv.y);
      float scale = 1.0;
      
      if(dir && diffY > 0.0)
      {
          dsqr = dsqr * 3.0;
      }
      else if(!dir && diffY < 0.0)
      {
          dsqr = dsqr * 3.0;
      }
      
      scale = pow(smoothstep(width * widthFactor, 0.0, dsqr), exponent);
      
      return min(color * scale, color);
  }

  void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec3 color = vec3(mix(bottom, top, uv.x * uv.y * 1.1));
      color += calcSine(uv, 0.2, 0.20, 0.2, 0.0, 0.5,  vec3(0.3, 0.3, 0.3), 0.1, 15.0,false);
      color += calcSine(uv, 0.4, 0.40, 0.15, 0.0, 0.5, vec3(0.3, 0.3, 0.3), 0.1, 17.0,false);
      color += calcSine(uv, 0.3, 0.60, 0.15, 0.0, 0.5, vec3(0.3, 0.3, 0.3), 0.05, 23.0,false);

      color += calcSine(uv, 0.1, 0.26, 0.07, 0.0, 0.3, vec3(0.3, 0.3, 0.3), 0.1, 17.0,true);
      color += calcSine(uv, 0.3, 0.36, 0.07, 0.0, 0.3, vec3(0.3, 0.3, 0.3), 0.1, 17.0,true);
      color += calcSine(uv, 0.5, 0.46, 0.07, 0.0, 0.3, vec3(0.3, 0.3, 0.3), 0.05, 23.0,true);
      color += calcSine(uv, 0.2, 0.58, 0.05, 0.0, 0.3, vec3(0.3, 0.3, 0.3), 0.2, 15.0,true);

      gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    updateCanvasSize();

    // Compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Set up buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'iTime');

    let startTime = Date.now();

    const render = () => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, elapsedTime);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (<div className=''>
    <div className='fixed top-0 left-0 w-full h-full -z-10 bgfadeIn'></div>
    <div className='fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-bl from-transparent from-25% to-black backdrop-blur-sm'></div>
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-30" />
    </div>);
};