import { CONTACT } from "../constants";
import Leaf2 from "../assets/leaf-2.png";
import Leaf1 from "../assets/leaf-1.png";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 relative">
      <h2 className="contact_top my-10 text-center text-4xl font-DancingScript">
        Get In Touch
      </h2>
      <div className="contact text-center tracking-wider">
        <div className="my-4">{CONTACT.address}</div>
        <div className="my-4">{CONTACT.phoneNo}</div>
        <div className="my-4">{CONTACT.email}</div>
      </div>
      <img
        src={Leaf1}
        alt="leaf"
        width={250}
        className="leaf-1 absolute z-50 -left-20 top-0 opacity-30"
        
      />

      <img
        className="leaf-2 absolute z-50 -right-20 top-0 opacity-30"
        src={Leaf2}
        alt="leaf"
        width={250}
      />
    </div>
  );
};

export default Contact;
