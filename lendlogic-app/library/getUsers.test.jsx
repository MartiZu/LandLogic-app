import getUsers from "./getUsers";
import { describe } from "node:test";

// emultating a fetch request
jest.mock('node-fetch');

describe("getUsers function", () => {
    it("fetch request is successful", async () => {
        // Setting up the mock response
        const mockSuccessfulResponse = {users: [user1, user2]}
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
          ok: true,
          json: () => mockJsonPromise,
        });
        // mockImplemenation 
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        
        // Call the getUsers function
        const result = await getUsers();
        
        expect(global.fetch).toHaveBeenCalledWith('https://lendlogic-data.onrender.com/users');
        expect(result).toEqual(mockSuccessfulResponse);
    });
})