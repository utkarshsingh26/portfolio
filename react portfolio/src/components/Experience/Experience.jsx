import React from 'react';
import {getImageURL} from '../../utils';

import skills from '../../data/skills.json';
import history from '../../data/history.json';

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        <div>{
          skills.map((skill, id) =>{
            return <div key={id}>
              <div><img src={getImageURL(skill.imageSrc)} alt={skill.title}></img></div>
              <p>{skill.title}</p>
            </div>
          })
          }</div>
        <ul>
          {history.map((historyItem, id) =>{
            return <li key={id}><img src={getImageURL(historyItem.image)}></img></li>
          })}
          </ul>
          <div>
            <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
          </div>
      </div>
    </section>
  )
}
