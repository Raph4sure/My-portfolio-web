// function Test1() {
//     return (
//         <section className="">
//             <div>Just testing</div>
//             <button className="text-[4rem] phone:text-red-500">
//                 Testing Responsive Text
//             </button>
//         </section>
//     );
// }

// export default Test1;


export default function Test1() {
    return (
        <div className="p-6">
            <div>Just testing</div>

            <button className="text-[40px] tablet:bg-yellow-500 phone:bg-red-500 dark:bg-blue-500 dark:text-red-500">
                Resize me!
            </button>

            <div className="mt-4 text-grey-l1">This should be grey</div>
        </div>
    );
}
  