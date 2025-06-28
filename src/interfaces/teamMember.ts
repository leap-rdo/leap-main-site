export default interface TeamMember {
  id: string,
  name: string,
  bio: string,
  position: string,
  image: {
    alternativeText: string,
    width: number,
    height: number,
    ext: string,
    url: string,
  }
}