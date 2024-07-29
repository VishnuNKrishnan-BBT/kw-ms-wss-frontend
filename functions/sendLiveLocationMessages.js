import { Geolocation, Motion, TrackerInfo, TrackerSignal } from "../classes/classes"

const sendLiveLocationMessages = (socket = null) => {

    if (!socket) {
        console.log('Socket parameter not found!')
        return
    }

    const interval = setInterval(() => {

        //Get data from db
        // { ... }

        const trackerId = 'ASX-434-DEW-431'
        const accountId = 1212621
        const vehicleId = '121-342-124-553'
        const latitude = 22.5
        const longitude = 55.5
        const speed = 32
        const altitude = 12
        const accuracy = 1
        const isParked = false
        const lastOnline = Date.now()

        const message = {
            trackerInfo: new TrackerInfo(trackerId, accountId, vehicleId).getTrackerInfo(),
            geoLocation: new Geolocation(latitude, longitude).getCoords(),
            motion: new Motion(speed, altitude, isParked).getMotionData(),
            trackerSignal: new TrackerSignal(accuracy, lastOnline)
        }

        socket.send(message)

    }, 2000)
}

module.exports = { sendLiveLocationMessages }