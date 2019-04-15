import React from 'react';

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: React.FC<React.SVGAttributes<SVGElement>>;
  export = value;
}

declare const PRODUCTION: boolean;
