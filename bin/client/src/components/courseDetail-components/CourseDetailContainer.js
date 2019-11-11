import React from 'react';
import NotFound from '../NotFound';
import CourseDetailElement from './CourseDetailElement';


export default (props) => {

  const courseDetails = props.course;
  let course;

  // console.log(courseDetails);
  // console.log(props);

  if (courseDetails) {
    // map the course details to the frame
    course = courseDetails.map(data => {
      return (

        <CourseDetailElement 
          title={data.title}
          userId={data.User.id}
          emailAddress={data.User.emailAddress}
          firstName={data.User.firstName}
          lastName={data.User.lastName}
          description={data.description}
          estimatedTime={data.estimatedTime}
          materialsNeeded={data.materialsNeeded}
          id={data.id}
          key={data.id}
        />

        
        // <div className="bounds course--detail" key={data.id}>
        //   <div className="grid-66">
        //     <div className="course--header">
        //       <h4 className="course--label">Course</h4>
        //       <h3 className="course--title">{data.title}</h3>
        //       <p>{`By ${data.User.firstName} ${data.User.lastName}`}</p>
        //     </div>
        //     <div className="course--description">
        //         <ReactMarkdown 
        //           source={data.description}
        //           escapeHtml={false}
        //         />
        //     </div>
        //   </div>
        //   <div className="grid-25 grid-right">
        //     <div className="course--stats">
        //       <ul className="course--stats--list">
        //         <li className="course--stats--list--item">
        //         {/* Not Required */}
        //           <h4>Estimated Time</h4>
        //           {
        //             data.estimatedTime ?
        //               <h3>{ data.estimatedTime }</h3>
        //               :
        //               <h3></h3>
        //           }
        //         </li>
        //         <li className="course--stats--list--item">
        //         {/* Not Required */}
        //           <h4>Materials Needed</h4>
        //           {
        //             data.materialsNeeded ?
        //               <ul>
        //                 <ReactMarkdown 
        //                   source={data.materialsNeeded}
        //                   escapeHtml={false}
        //                 />
        //               </ul>
        //               :
        //               <ul></ul>
        //           }
        //         </li>
        //       </ul>
        //     </div>
        //   </div>
        // </div>
      );
    });
  } else {
    course = <NotFound />
  }


// course: {
//   User: {
//     emailAddress: "joe@smith.com"
//     firstName: "Joe"
//     id: 1
//     lastName: "Smith"
//   }
//     description: "My course description. And again."
//     estimatedTime: "12 hours"
//     id: 1
//     materialsNeeded: "* 1/2 x 3/4 inch parting strip↵* 1 x 2 common pine↵* 1 x 4 common pine↵* 1 x 10 common pine↵* 1/4 inch thick lauan plywood↵* Finishing Nails↵* Sandpaper↵* Wood Glue↵* Wood Filler↵* Minwax Oil Based Polyurethane↵"
//     title: "New Course Updated Again Hello"
//     userId: 1
// }



  return (
    <div>
      { course }
    </div>
    // <div class="bounds course--detail">
    //   <div class="grid-66">
    //     <div class="course--header">
    //       <h4 class="course--label">Course</h4>
    //       <h3 class="course--title">Build a Basic Bookcase</h3>
    //       <p>By Joe Smith</p>
    //     </div>
    //     <div class="course--description">
    //       <p>High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.</p>
    //       <p>Not every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.</p>
    //       <p>Our pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.</p>
    //       <p>We made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.</p>
    //       <p>As for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.</p>
    //       <p>The specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.</p>
    //     </div>
    //   </div>
    //   <div class="grid-25 grid-right">
    //     <div class="course--stats">
    //       <ul class="course--stats--list">
    //         <li class="course--stats--list--item">
    //           <h4>Estimated Time</h4>
    //           <h3>14 hours</h3>
    //         </li>
    //         <li class="course--stats--list--item">
    //           <h4>Materials Needed</h4>
    //           <ul>
    //             <li>1/2 x 3/4 inch parting strip</li>
    //             <li>1 x 2 common pine</li>
    //             <li>1 x 4 common pine</li>
    //             <li>1 x 10 common pine</li>
    //             <li>1/4 inch thick lauan plywood</li>
    //             <li>Finishing Nails</li>
    //             <li>Sandpaper</li>
    //             <li>Wood Glue</li>
    //             <li>Wood Filler</li>
    //             <li>Minwax Oil Based Polyurethane</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}
