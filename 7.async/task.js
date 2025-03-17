class AlarmClock {
	constructor() {
		this.alarmCollection = []; //коллекиця звонков
		this.intervalId = null // id таймера
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}
		for (let i = 0; i < this.alarmCollection.length; i++) {
			if (time === this.alarmCollection.length[i]) {
				console.log('Уже присутствует звонок на это же время')
				return
			}
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time)
	}
	getCurrentFormattedTime() {
		let now = new Date();
		let hours = String(now.getHours()).padStart(2, '0');
		let minutes = String(now.getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	}
	start() {
		if (this.intervalId !== null) {
			return
		}
		this.intervalId === setInterval(() => {
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback()
				}
			})
		}, 1000)
	}
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null
	}
	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => alarm.canCall = true)
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = []
	}
}