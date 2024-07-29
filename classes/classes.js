class Geolocation {
    constructor(lat, lon) {
        this.latitude = lat
        this.longitude = lon
    }

    getCoords = () => {
        return {
            latitude: this.lat,
            longitude: this.lon
        }
    }
}

class Motion {
    constructor(speed, altitude, isParked) {
        this.speed = speed
        this.altitude = altitude
        this.isParked = isParked
    }

    getMotionData = () => {
        return {
            speed: this.speed,
            altitude: this.altitude,
            isParked: this.isParked
        }
    }
}

class TrackerSignal {
    constructor(accuracy, lastOnline) {
        this.accuracy = accuracy
        this.lastOnline = lastOnline
    }

    getTrackerSignalData = () => {
        return {
            accuracy: this.accuracy,
            lastOnline: this.lastOnline
        }
    }
}

class TrackerInfo {
    constructor(trackerId, accountId, vehicleId) {
        this.trackerId = trackerId
        this.accountId = accountId
        this.vehicleId = vehicleId
    }

    getTrackerInfo = () => {
        return {
            trackerId: this.trackerId,
            accountId: this.accountId,
            vehicleId: this.vehicleId
        }
    }
}


module.exports = {
    Geolocation,
    Motion,
    TrackerSignal,
    TrackerInfo
}