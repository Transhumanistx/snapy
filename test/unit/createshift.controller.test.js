// Test Snapty using JEST 
// Author: Tan

const shiftCreationController = require ("../../controllers/shiftManagerController");

// Import the model for Shifts 

const shiftModels = require("../../models/shiftsModel");

// import http mocks
const httpMocks = require("node-mocks-http")
const mData = require("../mock-data/new-shift.json")

// first create a mock under the shiftsModel
// Here the purpose is to check if our code is wowrking using JEST.fn
// With JEST.fn, we overwrite the original Create implementation to create our own test case

shiftModels.create = jest.fn();

// Simple Test Suite 1
// Testing if the create function has a create method inside 
// if mehtod found, test will be passed
// if not, failed the test 

describe("shiftCreationController.shiftManagerController", () => {
    // Case 1
    it("Should have a create method inside the fucntion", () => {
        expect(typeof shiftCreationController.manage_shifts_post).toBe("function");
    });

    // Case 2: We want to make sure that the shiftsModel actually trying to create a model
    it("It should Call shiftsModels.crete", () => {
        let req, res, next;

        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null; 
        req.body = mData;

        shiftCreationController.manage_shifts_post(res, req, next); // we are expecting a model to be created
        expect(shiftModels.create).toBeCalledWith(mData); // we referenced the shiftsModel where we override the actuall create
    })


});

// Test Suite 2


