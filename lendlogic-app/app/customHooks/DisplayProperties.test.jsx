import { describe } from "node:test";
import displayProperties from "./DisplayProperties";
import GetProperties from "@/library/getProperties";

const mockData = [
    {
        id: 1,
        postcode: "SW1A 1AA",
        city: "London",
        council: "City of Westminster",
        value: "200000"
      },
    ];

jest.mock("../../library/getProperties");

describe("DisplayProperties", () => {
    it("check output postcode", async () => {
        GetProperties.mockResolvedValue(mockData);
        const result = await displayProperties("SW1A 1AA");
        expect(result.value).toEqual("200000");
    });
});