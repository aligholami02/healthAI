import {Col, Divider, Image, Row, Typography} from "antd";

export const SideBar = () => {

    return (
        <>
            <div className='flex flex-col w-full text-center bg-white rounded-2xl m-3 p-3 gap-10'>
                <Typography className='!font-bold text-[20px] flex justify-start'>
                    مطالب محبوب
                </Typography>
                <div>
                    <a href={'https://bitpin.ir/academy/what-is-artificial-inteligence/'} target="_blank">
                        <Row className='flex items-center'>
                            <Col xs={19} className='text-right'>
                                  <span className='font-medium text-right'>
                                     هوش مصنوعی یا AI چیست؟
                                  </span>
                            </Col>
                            <Col xs={5}>
                                <Image
                                    src='../src/assets/artificial-intelligence-1.jpg'
                                    preview={false}
                                    alt={'ai'}
                                    className='!w-full !h-[50px] rounded-md'
                                />
                            </Col>
                        </Row>
                    </a>
                    <Divider/>
                    <a href={'https://blog.faradars.org/%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%DA%86%DB%8C%D8%B3%D8%AA/'} target="_blank">
                        <Row className='flex items-center'>
                            <Col xs={19} className='text-right'>
                                  <span className='font-medium text-right'>
                                         هوش مصنوعی چیست؟ به زبان ساده + مسیر یادگیری
                                  </span>
                            </Col>
                            <Col xs={5}>
                                <Image
                                    src='../src/assets/What-is-Artificial-Intelligence-Index-AI-1.jpg'
                                    preview={false}
                                    alt={'ai'}
                                    className='!w-full !h-[50px] rounded-md'
                                />
                            </Col>
                        </Row>
                    </a>
                    <Divider/>
                    <a href={'https://bit24.cash/blog/ai/'} target="_blank">
                        <Row className='flex items-center'>
                            <Col xs={19} className='text-right'>
                                  <span className='font-medium text-right'>
                                      هوش مصنوعی چیست؟ کامل ترین مقاله تعریف AI به زبان ساده
                                  </span>
                            </Col>
                            <Col xs={5}>
                                <Image
                                    src='../src/assets/ai.webp'
                                    preview={false}
                                    alt={'ai'}
                                    className='!w-full !h-[50px] rounded-md'
                                />
                            </Col>
                        </Row>
                    </a>
                    <Divider/>
                    <a href={'https://nabzgroup.com/mag/artificial-intelligence-in-medicine'} target="_blank">
                        <Row className='flex items-center'>
                            <Col xs={19} className='text-right'>
                                <span className='font-medium text-right'>
                                    هوش مصنوعی در پزشکی و حوزه سلامت
                                </span>
                            </Col>
                            <Col xs={5}>
                                <Image
                                    src='../src/assets/artificial-intelligence-in-medicine-1660821468.webp'
                                    preview={false}
                                    alt={'ai'}
                                    className='!w-full !h-[50px] rounded-md'
                                />
                            </Col>
                        </Row>
                    </a>
                </div>
            </div>
        </>
    );
};
export default SideBar