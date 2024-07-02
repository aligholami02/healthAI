import {Col, Row} from "antd"
import Header from "../components/Header"
import {Outlet} from "react-router-dom"
import SideBar from "../components/SideBar"

const Layout = () => {
    return (
        <div className='bg-gray-100'>
            <Header/>
            <div className='container mx-auto'>
                <Row gutter={[10, 0]}>
                    <Col xs={19}>
                        <div className='w-full bg-white rounded-2xl m-3 p-3 grid gap-5'>
                            <Outlet/>
                        </div>
                    </Col>
                    <Col xs={5} className='flex justify-end'>
                        <SideBar/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Layout