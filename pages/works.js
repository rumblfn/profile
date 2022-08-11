import { PageBox } from "../styled/pages";
import { TextHuge, TextHugeStyling } from "../styled/text";

export const Works = () => {
    const color = "var(--app-color-5)"
    return (
        <PageBox color={color}>
            <TextHuge>
                <TextHugeStyling color={color}>
                    Works
                </TextHugeStyling>
            </TextHuge>
        </PageBox>
    )
}

export default Works;