import * as React from "react";

export default class VectorAuthPage extends React.PureComponent {
    // cache the url as a static to prevent it changing without refreshing
    private static getWelcomeBackgroundColor(): string {
        return "#1C1C1C"; // Return the desired color
    }

    public render(): React.ReactElement {
        const pageStyle = {
            background: VectorAuthPage.getWelcomeBackgroundColor(),
        };

        const modalStyle: React.CSSProperties = {
            position: "relative",
            background: "initial",
        };

        const blurStyle: React.CSSProperties = {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            filter: "blur(40px)",
            background: pageStyle.background,
        };

        const modalContentStyle: React.CSSProperties = {
            display: "flex",
            zIndex: 1,
            background: "rgba(255, 255, 255, 0.59)",
            borderRadius: "8px",
        };

        return (
            <div className="mx_AuthPage" style={pageStyle}>
                <div className="mx_AuthPage_modal" style={modalStyle}>
                    <div className="mx_AuthPage_modalBlur" style={blurStyle} />
                    <div className="mx_AuthPage_modalContent" style={modalContentStyle}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
