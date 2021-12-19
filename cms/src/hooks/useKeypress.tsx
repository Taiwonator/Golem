import { useState, useEffect } from "react";

export default function useKeypress(key, action) {
    useEffect(() => {
      function onKeyup(e) {
        if (e.key === key) { 
          action() 
          if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
          }
        }
      }
      window.addEventListener('keydown', onKeyup);
      return () => window.removeEventListener('keydown', onKeyup);
    }, []);
  }