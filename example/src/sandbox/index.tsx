import * as React from 'react';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css'
import { initialize_render, populate_scene, render_scene } from './render';

interface ICwnOntoVizProps {
  text: string
}



export const CwnOntoViz = ({ text }: ICwnOntoVizProps) => {
  let render_ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let threes = initialize_render(render_ref);
    let sobjs = populate_scene(threes);
    render_scene(threes, sobjs);
  }, []);
  return (
    <div className={styles.test}>CwnOntoViz: {text}
      <div ref={render_ref}></div>
    </div>
  )
}
