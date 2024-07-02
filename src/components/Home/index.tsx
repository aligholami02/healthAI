import {PlusOutlined} from '@ant-design/icons';
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber, Progress,
    Radio,
    Select,
    Typography,
    Upload,
} from 'antd';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const {TextArea} = Input;

export const Home = () => {

    const conicColors = {'0%': '#87d068', '50%': '#FFFF00', '100%': '#ff0000'};

    const progressFormat = (percent: any) => (<span className='text-[28px] font-extrabold'>%{percent}</span>)

    return (
        <>
            <div className='w-full bg-white rounded-2xl m-3 p-3 grid gap-5'>
                <Typography className='font-bold text-2xl'>
                    فرم اطلاعات پزشکی
                </Typography>
                <Form
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
                        <Checkbox>Checkbox</Checkbox>
                    </Form.Item>
                    <Form.Item label="جنسیت">
                        <Radio.Group>
                            <Radio value="man"> مرد </Radio>
                            <Radio value="woman"> زن </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="میزان فعالیت های فیزیکی">
                        <Radio.Group>
                            <Radio value="low"> کم </Radio>
                            <Radio value="normal"> متوسط </Radio>
                            <Radio value="high"> زیاد </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="سابقه بیماری قلبی">
                        <Radio.Group>
                            <Radio value='true'> دارم </Radio>
                            <Radio value="false"> ندارم </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="اطلاعات دموگرافیک">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="تاریخ تولد">
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item label="سن خود را وارد کنید">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item label="قد خود را وارد کنید">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item label="وزن خود را وارد کنید">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item label="میانگین ساعت خواب شبانه">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item label="توضیحات">
                        <TextArea rows={4}/>
                    </Form.Item>
                    <Form.Item label="آپلود برگه آزمایش پزشکی" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card">
                            <button style={{border: 0, background: 'none'}} type="button">
                                <PlusOutlined/>
                                <div style={{marginTop: 8}}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                    <Form.Item className='text-left'>
                        <Button
                            type={'dashed'}
                            size={'large'}
                            className='text-center bg-blue-500 text-white'
                        >
                            ذخیره
                        </Button>
                    </Form.Item>
                </Form>
                <div className='grid text-center gap-y-2'>
                    <Typography className='font-bold text-2xl'>
                        نمودار سلامت شما :
                    </Typography>
                    <Progress
                        type="dashboard"
                        percent={93}
                        strokeColor={conicColors}
                        strokeWidth={13}
                        format={progressFormat}
                    />
                </div>
            </div>
        </>
    );
};
export default Home