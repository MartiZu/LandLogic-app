import getUsers from "./getUsers";
import { describe } from "node:test";

const mockUsers = ["user1", "user2"];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUsers),
  })
);

describe("getUsers", () => {
  it("fetches successfully data from an API", async () => {
    // Arrange
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    // Act
    await getUsers();

    // Assert
    expect(global.fetch).toHaveBeenCalled();
  });
  it("should call fetch and return the correct data", async () => {
    // Arrange
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    // Act
    const users = await getUsers();

    // Assert
    expect(global.fetch).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
  it("should handle !ok response", async () => {
    const logSpy = jest.spyOn(global.console, "log");
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
    });
    // Act
    await getUsers();
    // Assert
    expect(global.fetch).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();
  });
});
