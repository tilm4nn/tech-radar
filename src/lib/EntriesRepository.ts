import intersection from 'lodash.intersection';

import {ALL_ENTRIES} from '../data/entries';
import {QUADRANTS} from '../data/quadrants';
import {RINGS} from "../data/rings";
import {SKILLS} from "../data/skills";

import {IEntry} from '../types/IEntry';
import {IRadarEntry} from '../types/IRadarEntry';
import {IQuadrant} from '../types/IQuadrant';
import {IRing} from '../types/IRing';
import {ISkill} from "../types/ISkill";
import {SkillType} from "../types/SkillType";
import {RingType} from "../types/RingType";

let id = 1;
function normalizeEntry(entry: IEntry, availableRingNames: string[], availableQuadrantTypes: string[]): IRadarEntry | null {
  let ringIndex = availableRingNames.indexOf(entry.ring);
  let quadrantIndex = availableQuadrantTypes.indexOf(entry.quadrant);
  if (ringIndex < 0 || quadrantIndex < 0) {
    return null;
  }
  return {
    ring: ringIndex,
    label: entry.label,
    link: entry.link,
    moved: (typeof(entry.moved) === 'undefined') ? 0 : entry.moved,
    active: (typeof(entry.active) === 'undefined') ? true : entry.active,
    quadrant: quadrantIndex,
    id: id++,
  }
}

function filterByTags(entries: IEntry[], includeTags: string[]): IEntry[] {
  // when includeTags is not provided just return all entries
  if (!(includeTags && includeTags.length) ) {
    return entries;
  }
  return entries.map((entry) => {
    for( let includeTag of includeTags) {
      if (entry.tags.indexOf(includeTag) >= 0) {
        return entry;
      }
    }
    return {
      ...entry,
      active: false,
    };
  });
}

function filterByProperty(entries: IEntry[], availableValues: string[], includeValues: string[], propertyAccessor: (e: IEntry) => string | undefined): IEntry[] {
  if (!(includeValues && includeValues.length) ) {
    includeValues = availableValues;
  }

  let intersectionRings = intersection(availableValues, includeValues);
  return entries.map((entry) => {
    let value = propertyAccessor(entry);
    if (value && intersectionRings.indexOf(value) >= 0) {
      return entry;
    }

    return {
      ...entry,
      active: false,
    };
  });
}

export function getQuadrantEntriesGroupedByTags(
  quadrants: IQuadrant[],
  availableRings: IRing[],
  availableSkills: ISkill[],
  includeTags: string[],
  includeRingTypes: RingType[],
  includeSkillTypes: SkillType[]
) {
  id = 1;
  let availableRingTypes = availableRings.map(r => r.name);
  let availableSkillTypes = availableSkills.map(s => s.type);
  let availableQuadrantTypes = quadrants.map(q => q.type);
  let filteredEntries = filterByTags(getEntries(), includeTags);
  filteredEntries = filterByProperty(filteredEntries, availableSkillTypes, includeSkillTypes, e => e.skill);
  filteredEntries = filterByProperty(filteredEntries, availableRingTypes, includeRingTypes, e => e.ring);
  let entriesResult: IRadarEntry[] = [];
  for (let entry of filteredEntries) {
      let normalizedEntry = normalizeEntry(entry, availableRingTypes, availableQuadrantTypes);
      if (normalizedEntry) {
        entriesResult.push(normalizedEntry)
      }
  }
  return entriesResult;
}

export function getAllTags(): string[] {
  let tagKeys: Record<string, boolean> = {};
  ALL_ENTRIES.forEach( (entry) => {
    entry.tags.forEach(tag => {
      tagKeys[tag] = true;
    })
  });
  return Object.keys(tagKeys);
}

export function getRingNames(rings: IRing[]) {
  return rings.map( (ring) => {
    return ring.name;
  } );
}

export function getRings(): IRing[] {
  return RINGS;
}

export function getSkills(): ISkill[] {
  return SKILLS;
}

export function getQuadrants(): IQuadrant[] {
  return QUADRANTS;
}

export function getEntries(): IEntry[] {
  return ALL_ENTRIES;
}
