import { renderHook } from "@testing-library/react-hooks";
import useTestHook, { IScreenInfo } from "./useTestHook";
import * as antd from "antd";
import { faker } from "@faker-js/faker";

jest.mock("antd");
const mockWarning = antd.message.warning as jest.Mock;

const mockMenu: any[] = [
    {
        Key: 1,
        Label: faker.string.uuid(),
        ParentId: faker.number.int(),
        ScreenCode: "test1",
        Application: faker.string.uuid(),
        Icon: faker.string.uuid(),
        MenuOrder: faker.number.int(),
        IsVisible: faker.datatype.boolean(),
        Url: "testurl",
        IsExternalMenuItem: faker.datatype.boolean(),
        Children: []
    }
];

beforeEach(() => {
    global.window = Object.create(window);
});

test("should work correctly when screen is permitted", async () => {
    Object.defineProperty(window, "location", {
        value: { pathname: `\\${mockMenu[0].Url}` },
        writable: true
    });

    const { result } = renderHook(() => useTestHook(false));

    expect(result.current.screenCode).toBe(mockMenu[0].ScreenCode);
    expect(result.current.screenId).toBe(mockMenu[0].Key);
    console.log("testttttttttttt",window.location.pathname);
    expect(result.current.permittedStatus).toBe("denied");
    expect(mockWarning).not.toHaveBeenCalled();
});

test("should work correctly when screen is permitted copy2", async () => {
    Object.defineProperty(window, "location", {
        value: { pathname: `\\${mockMenu[0].Url}` },
        writable: true
    });

    const { result } = renderHook(() => useTestHook(false));

    expect(result.current.screenCode).toBe(mockMenu[0].ScreenCode);
    expect(result.current.screenId).toBe(mockMenu[0].Key);
    console.log("testttttttttttt",window.location.pathname);
    expect(result.current.permittedStatus).toBe("denied");
    expect(mockWarning).not.toHaveBeenCalled();
});

test("should work correctly when screen isdgf dgfd", async () => {
    Object.defineProperty(window, "location", {
        value: { pathname: `\\${mockMenu[0].Url}` },
        writable: true
    });

    const { result } = renderHook(() => useTestHook(false));

    expect(result.current.screenCode).not.toBe('test');
});