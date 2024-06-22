import React from "react";
import { FaUserCircle } from "react-icons/fa";
const commentsData = [
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [
      {
        name: "Krishna Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adip,",
        replies: [],
      },
      {
        name: "Krishna Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adip,",
        replies: [
          {
            name: "Krishna Sharma",
            text: "Lorem ipsum dolor sit amet, consectetur adip,",
            replies: [
              {
                name: "Krishna Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adip,",
                replies: [
                  {
                    name: "Krishna Sharma",
                    text: "Lorem ipsum dolor sit amet, consectetur adip,",
                    replies: [
                      {
                        name: "Krishna Sharma",
                        text: "Lorem ipsum dolor sit amet, consectetur adip,",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
  {
    name: "Krishna Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip,",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <FaUserCircle className="w-10 h-10" />
      <div className="px-3">
        <p className="font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ Comments }) => {
  return Comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList Comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mt-3 ">Comments :</h1>
      <CommentsList Comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
