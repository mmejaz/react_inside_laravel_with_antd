import { Routes, Route } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import Charts from "../page/Charts";
function PageContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/activity" element={<div>activity</div>}></Route>
                <Route path="/task" element={<div>task</div>}></Route>
                <Route path="/payment" element={<div>payment</div>}></Route>
                <Route path="/progress" element={<div>progress</div>}></Route>
                <Route path="/settings" element={<div>settings</div>}></Route>
                <Route path="/charts" element={<Charts/>}></Route>
            </Routes>
        </>
    );
}

export default PageContent;
