import Text "mo:core/Text";

actor {
  public func greet(name : Text) : async Text {
    "Hello, " # name # "!";
  };

  public query ({ caller }) func getAboutMe() : async Text {
    "Hi, I'm Lea. I'm a web developer and computer science student at Technical University of Vienna.";
  };

  public query ({ caller }) func getSkills() : async [Text] {
    [
      "Web Design",
      "Web Development",
      "JavaScript",
      "Motoko",
      "Computer Science",
      "TypeScript",
      "Python",
      "Interdisciplinary Computing",
    ];
  };
};
