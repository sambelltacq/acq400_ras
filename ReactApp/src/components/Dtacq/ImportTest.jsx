import React, {Suspense, lazy} from 'react';



const launcherOpis = {
    capture: {
        transient: {
            file: "Transient",
            label: "Transient.opi"
        }, 
        stream: {
            file: "Stream",
            label: "Stream.opi"
        },
    },
    borders: [],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Stream.opi",
                        component: "grid",
                    },
                ]
            },
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Live.opi",
                        component: "abc",
                    },
                ]
            },
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Transient.opi",
                        component: "com1",
                        id: "com1id"
                    }
                ]
            }
        ]
    }
};

function Test1(props) {
    //let path = "./opi/Live" // works
    let path = "/src/components/Dtacq/opi/Live"
    const Component = lazy(() => import(path));
    return (
        <div>Import test
            <Suspense fallback={<h3>Loading...</h3>}>
                <Component />
            </Suspense>
        </div>
    );
}
export default Test1;

