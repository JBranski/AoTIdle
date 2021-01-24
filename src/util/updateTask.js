import playerInfo from '../playerData/playerInfo';
import fishingData from '../gameData/taskData/fishingData';
import miningData from '../gameData/taskData/miningData';
import woodcuttingData from '../gameData/taskData/woodcuttingData';
import huntingData from '../gameData/taskData/huntingData';
import calcSkillLevel from '../util/calcSkillLevel';

const updateTask = function(task, category) {
	let newTask = [];
	let skillLevel = 1;
	switch (category) {
		case 'fishing':
			newTask = fishingData.find( ({ name }) => name === task);
			skillLevel = calcSkillLevel(category);
			break;
		case 'mining':
			newTask = miningData.find( ({ name }) => name === task);
			skillLevel = calcSkillLevel(category);
			break;
		case 'woodcutting':
			newTask = woodcuttingData.find( ({ name }) => name === task);
			skillLevel = calcSkillLevel(category);
			break;
		case 'hunting':
			newTask = huntingData.find( ({ name }) => name === task);
			skillLevel = calcSkillLevel(category);
			break;
		default:
			console.log("please select a task!");
	}

	if( skillLevel < newTask.minLevel ) {
		console.log("You do not have the required level for this task");
		return;
	} else {
		Object.assign(playerInfo, {
			activeTask : newTask.name,
			activeCategory : newTask.skill,
			expRate : newTask.experience,
			attemptRate : newTask.attemptRate,
			successRate : newTask.successRate,
			depleteChance : newTask.depleteChance,
		})
	}
}

export default updateTask;