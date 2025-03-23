import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Card = ({ contact, handleDelete, handleEdit }) => {
  const [name, surname] = contact.name.split(" ");

  // console.log(name);
  // console.log(surname);

  return (
    <div className="card">
      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => handleDelete(contact.id)}>
          <RiDeleteBin6Line />
        </button>
        <button onClick={() => handleEdit(contact)}>
          <GrUpdate />
        </button>
      </div>
      {/* Name */}
      <h1>
        {name[0]}
        {surname[0]}
      </h1>
      {/*  */}
      <h3>{contact.name}</h3>
      {/* Position */}
      <p>{contact.position}</p>
      {/* Company */}
      <p>{contact.company}</p>
      {/* Bottom */}
      <div className="bottom">
        <div>
          <span>
            <BsFillTelephoneInboundFill />
          </span>
          <span>{contact.phone}</span>
        </div>
        <div>
          <span>
            <IoMdMail />
          </span>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
