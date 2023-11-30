import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
// function AddCabin() {
//   const [showModal, setshowModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setshowModal((show) => !show)}>
//         Add new Cabin
//       </Button>

//       {showModal && (
//         <Modal onClose={() => setshowModal(false)}>
//           <CreateCabinForm onCloseModal={() => setshowModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
