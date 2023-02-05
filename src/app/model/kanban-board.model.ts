import { IPasien } from "./pasien.model";

export interface IKanbanBoard {
    id: string;
    header_caption: string;
    header_background_color: string;
    data: IPasien[];
    connected_to: Object[];
}