import { Button } from "react-bootstrap";

const Button1 = ({ btn_id }) => {
  return (
    <Button variant="outline-primary" className="px-4">
      {btn_id}
    </Button>
  );
};
export default Button1;
