interface Profile {
  name: string;
  age: number;
  email: string;
}

//Partial makes everything optional
const updateProfile = (
  profile: Profile,
  updatedProfile: Partial<Profile>
): Profile => {
  return { ...profile, ...updatedProfile };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 100, name: "farhan" }));
