import React from "react";

function ResponsiveDemo() {
    return (
        <div className="p-4">
            <h1 className="text-responsive-2xl mb-4">Responsive Heading</h1>
            <p className="text-responsive-base">
                This text scales automatically with screen size!
            </p>
            <p className="text-responsive-lg">Larger responsive text</p>

            {/* You can also use inline styles with CSS custom properties */}
            <div>
                Custom styled responsive text
            </div>

            {/* Mix with Tailwind classes */}
            <div className="text-responsive-3xl text-blue-500 font-bold">
                Responsive + Tailwind styling
            </div>
        </div>
    );
}

export default ResponsiveDemo;

// import React from "react";

// function ResponsiveDemo() {
//     return (
//         <div className="p-4">
//             <h1 className="text-responsive-2xl mb-4">Responsive Heading</h1>
//             <p className="text-responsive-base mb-2">
//                 This text scales automatically with screen size!
//             </p>
//             <p className="text-responsive-lg mb-2">Larger responsive text</p>

//             {/* You can also use inline styles with CSS custom properties */}
//             <div style={{ fontSize: "var(--text-2xl)", marginBottom: "1rem" }}>
//                 Custom styled responsive text
//             </div>

//             {/* Mix with Tailwind classes */}
//             <div className="text-responsive-3xl text-blue-500 font-bold">
//                 Responsive + Tailwind styling
//             </div>
//         </div>
//     );
// }

// export default ResponsiveDemo;
