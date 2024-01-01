import { jaJP } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs"

export const PlatformLayout = ({
    children,
    }: {
    children: React.ReactNode
    }) => {
    return (
        <ClerkProvider localization={jaJP}>
            {children}
        </ClerkProvider>
    )
}

export default PlatformLayout;
