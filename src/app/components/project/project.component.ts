import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  public name: any = '';
  public description: any = '';
  public createdDate: any = '';
  public usedTechnologies: any = '';

  constructor(private projectService: ProjectService) {}

  save() {
    const project = {
      name: this.name,
      description: this.description,
      createdDate: this.createdDate,
      usedTechnologies: this.usedTechnologies,
    };
    console.log(project);
    this.projectService.Add(project);
  }
}
