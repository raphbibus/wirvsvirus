export default class TrackHome {

    constructor() {
        this.taskName = 'track-home-status';
    }

    executeLooped() {
        this.checkForHomeSSID();
        setTimeout(this.executeLooped, 1000);
    }

    checkForHomeSSID() {
        alert('STILL GOING');
        return true;
    }
}
