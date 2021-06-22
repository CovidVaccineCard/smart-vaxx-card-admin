import firebase from "firebase";

interface IData {
  id: string;
  name: string;
  place: string;
  location: firebase.firestore.GeoPoint | null;
}

export interface ICenterListProps {
  list: IData[];
  editHandler: (data: IData) => void;
  deleteHandler: (id: string) => void;
}
