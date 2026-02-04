import { ACTIVITY_TYPES } from './activityContract';

const TYPES = Object.values(ACTIVITY_TYPES);

function createActivity({ id, timestamp, type, message, metadata }) {
    return {
        id, 
        timestamp, 
        type, 
        message, 
        metadata
    };
}

export function genrateActivities(count = 50){
    const now = Date.now();
    const activities = [];

    for(let i = 0; i < count; i++){
        activities.push(
            createActivity({
                id: `activity-${i + 1}`,
                timestamp: now - i * 1000,
                type: TYPES[i % TYPES.length],
                message: `Activity message ${i + 1}`,
                metadata: {
                    source: 'system',
                  },
            })
        )
    }
    return activities
}