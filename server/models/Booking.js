class Booking {
    constructor({userId, deskId, createdAt}) {
        this.userId = userId
        this.deskId = deskId
        this.createdAt = createdAt
    }
}

b1 = new Booking({ "hello": "world" })
console.log(b1)
