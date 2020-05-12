import { RingType } from './RingType';
import {SkillType} from "./SkillType";
import {QuadrantType} from "./QuadrantType";

export interface IEntry {
  ring: RingType;
  quadrant: QuadrantType
  label: string;
  link?: string;
  skill?: SkillType;
  tags: string[];
  active?: boolean;
  moved?: number;
}
