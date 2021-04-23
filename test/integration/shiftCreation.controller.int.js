const request = require("supertest");
const app = require("../../app");
const mData = require("../mock-data/new-shift.json");

// url for the endpoints

const endpointUrl = "/manage_shift/"

describe(endpointUrl, () => {
    it("POST" + endpointUrl, async() => {
        const response = request(app).post(endpointUrl)
        .send(mData);
        expect(response.statusCode).toBe(201);
        expect(response.body.shift_id).toBe(newTodo.shift_id);


    });

});
