import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

export interface IScreenInfo {
    screenCode: string;
    id: number;
}

const useTestHook = (disableScreenPermission?: boolean) => {
    const [permittedStatus, setPermittedStatus] = useState<"access" | "denied" | "initial">("initial");
    const [screenId, setScreenId] = useState<number>(-1);
    const [screenCode, setScreenCode] = useState<string>("");
    let activeScreenCode: string;

    const setPermissionStatus = (activeScreenCode: string) => {
        if (disableScreenPermission) {
            setPermittedStatus("access");
            return;
        }

        if (process.env.NODE_ENV === "development") {
            message.warning(
                "PageNotAuthorized".replace("{0}", activeScreenCode.toUpperCase()) +
                    "! " +
                    "page_not_authorized_in_development",
                3
            );
            setPermittedStatus("access");
            return;
        }
        setPermittedStatus("denied");
    };

    const findActiveScreenCode = useCallback(
        (menuItems: any[]) => {
            menuItems?.forEach((m: any) => {
                if (m.Url === window.location.pathname.substring(1)) {
                    activeScreenCode = m.ScreenCode;
                    setScreenInfo(m.Key, m.ScreenCode);
                    setPermittedStatus("access");
                    return;
                }

                if (m.Children) findActiveScreenCode(m.Children);
            });

            if (!activeScreenCode) activeScreenCode = "";
        },
        []
    );

    useEffect(() => {
        findActiveScreenCode([{screenCode: 'test1', id: 1, url: "testurl"}, {screenCode: 'test2', id: 2, url: "testurl"}]);

        if (activeScreenCode === "") {
            getScreenCode();
        }
    }, []);

    const setScreenInfo = (activeScreenId: number, activeScreenCode: string) => {
        setScreenId(activeScreenId);
        setScreenCode(activeScreenCode);
        window.sessionStorage.setItem("screen-code", activeScreenCode);
    };

    const getScreenCode = async () => {
        const screenInfo: IScreenInfo = {screenCode: 'test1', id: 1};
        setPermissionStatus(screenInfo.screenCode);
        setScreenInfo(screenInfo.id, screenInfo.screenCode);
    };

    return { permittedStatus, screenCode, screenId };
};
export default useTestHook;