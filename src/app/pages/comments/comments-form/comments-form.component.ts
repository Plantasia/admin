import { CommentsService } from './../../../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  currentAction:string;
  categoryForm:FormGroup;
  pageTitle:string;
  errorMessage: string[];
  submittingForm:boolean =false;

  constructor(
    private service: CommentsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction()
  }


  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new"){
      this.currentAction="new";
    }
    else{
      this.currentAction = "edit";
    }
  }


}
