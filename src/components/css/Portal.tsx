import { createPortal } from "react-dom";

export default function Portal() {
  return createPortal(<div className="modal">Modal</div>, document.body);
}
