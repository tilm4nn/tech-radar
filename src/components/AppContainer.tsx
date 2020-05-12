import React from 'react';

import {
  getAllTags,
  getQuadrants,
  getQuadrantEntriesGroupedByTags,
  getRings,
  getSkills
} from '../lib/EntriesRepository';
import { FilterContainer } from './FilterContainer';
import '../styles/radar.css';
import { redrawRadar } from './tech-radar/radar';
import { IQuadrant } from '../types/IQuadrant';
import { Header } from './Header';
import { IRadarEntry } from '../types/IRadarEntry';
import { IRing } from '../types/IRing';
import {ISkill} from "../types/ISkill";

interface IAppProps {
  radarId: string;
}

interface IAppState {
  availableTags: string[],
  selectedTags: string[],
  selectedSkills: ISkill[],
  selectedRings: IRing[],
  quadrants: IQuadrant[],
  entries: IRadarEntry[],
  rings: IRing[],
  skills: ISkill[],
}

export class AppContainer extends React.Component<IAppProps, IAppState>{
  constructor(props: IAppProps) {
    super(props);
    const quadrants = getQuadrants();
    const rings: IRing[] = getRings();
    const skills: ISkill[] = getSkills();

    this.state = {
      availableTags: getAllTags(),
      selectedTags: [],
      selectedSkills: [],
      selectedRings: [],
      quadrants,
      rings,
      skills,
      entries: [],
    };
  }

  selectTags = (selectedTags: string[]) => {
    this.setState({ selectedTags }, this.fetchEntries);
  }

  selectSkills = (selectedSkills: ISkill[]) => {
    this.setState({ selectedSkills: selectedSkills }, this.fetchEntries);
  }

  selectRings = (selectedRings: IRing[]) => {
    this.setState({ selectedRings: selectedRings }, this.fetchEntries);
  }

  componentDidMount() {
    this.fetchEntries();
  }

  fetchEntries = () => {
    const selectedRingNames = this.state.selectedRings.map(r => r.name);
    const selectedSkillTypes = this.state.selectedSkills.map(s => s.type);
    const entries = getQuadrantEntriesGroupedByTags(
      this.state.quadrants,
      this.state.rings,
      this.state.skills,
      this.state.selectedTags,
      selectedRingNames,
      selectedSkillTypes);

    this.setState({ entries }, this.renderExternalRadar);
  }

  renderExternalRadar = () => {
    setTimeout(() => {
      redrawRadar({
        radarId: this.props.radarId,
        quadrants: this.state.quadrants,
        entries: this.state.entries,
        colors: {
          background: '#fff',
          grid: '#bbb',
          inactive: '#eee'
        },
        rings: this.state.rings,
        zoomed_quadrant: undefined,
      });
    }, 0);
  }

  render = () => (
    <>
      <Header>
        <FilterContainer
          caption="Filter by tag"
          tags={this.state.availableTags.sort()}
          selectedTags={this.state.selectedTags}
          selectTags={this.selectTags}
          labelAccessor={tag => tag}
        />
        <FilterContainer
          caption="Filter by skill"
          tags={this.state.skills}
          selectedTags={this.state.selectedSkills}
          selectTags={this.selectSkills}
          labelAccessor={s => s.name}
        />
        {/*<FilterContainer*/}
        {/*  caption="Filter by ring"*/}
        {/*  tags={this.state.rings}*/}
        {/*  selectedTags={this.state.selectedRings}*/}
        {/*  selectTags={this.selectRings}*/}
        {/*  labelAccessor={r => r.name}*/}
        {/*/>*/}
      </Header>
      {/* <EntryList entries={this.state.entries} /> */}
    </>
  )
}
