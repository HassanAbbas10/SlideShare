import Description from "@/components/Description/Description";
import Input from "@/components/Input/Input";
import Steps from "@/components/Steps/Steps";
import { desc } from "@/utils/steps";
import {headings} from "@/utils/steps"
const Home = () => {
  return (
    <>
    <Input/>
    <Steps/>
    <Description headings={headings[0]} descriptions={desc[0]}/>
    <Description headings={headings[1]} descriptions={desc[1]}/>
    <Description headings={headings[2]} descriptions={desc[2]}/>
    </>
  );
};

export default Home;
