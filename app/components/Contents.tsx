import { ContentsLayout } from "./ContentsLayout";
import { LayoutWrapper } from "./LayoutWrapper";
import { SideLayout } from "./SideLayout";

export const Contents = () => {
    return (
        <>
            <LayoutWrapper>
                <SideLayout />
                    <ContentsLayout />
                <SideLayout />
            </LayoutWrapper>
        </>
    );
};
