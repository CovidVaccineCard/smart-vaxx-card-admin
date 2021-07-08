import firebase from "firebase";

export interface IModalProps {
  action: string;
  show: boolean;
  centerData: {
    id: string;
    name: string;
    place: string;
    location: firebase.firestore.GeoPoint | null;
  };
  centerHandler: (obj: {
    id: string;
    name: string;
    place: string;
    location: firebase.firestore.GeoPoint;
  }) => void;
  closeHandler: () => void;
}
