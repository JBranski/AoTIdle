import React from 'react';
import './Gathering.min.css';

import miningData from '../../gameData/taskData/miningData';
import playerStorage from '../../playerData/playerStorage';

import updateTask from '../../util/updateTask';

export default function Mining (props) {
	return (
		<section className="Mining Gathering">
			<section className="taskList">
				{
				miningData.map( rock => {

					return (
						<label key={`rockList${rock.name}`} className="mining task" onClick={() => updateTask(rock.name, rock.skill)}>
							<p className="taskCategory">Mine<br />
								<span className="taskName">{rock.name}</span>
							</p>
							<img src="#" alt="rock" />
							<input type="radio" name="currentTask" onClick={() => updateTask(rock.name, rock.skill)}/>
							<p className="taskInfo">
								{rock.experience}xp | lvl {rock.minLevel}
							</p>
							<p className="ownedResource">
								owned: {playerStorage[rock.name + " ore"]}
								
							</p>
							
						</label>
					)
				})}
			</section>
		</section>
	)
}