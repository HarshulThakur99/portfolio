import { resumeData } from "@/data/resume";

const Certifications = () => (
  <section id="certifications" className="py-20 px-4 bg-secondary/80">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">Certifications</h2>
      <ul className="space-y-6">
        {resumeData.certifications.map((cert, idx) => (
          <li key={idx} className="bg-background rounded-lg p-6 shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <span className="font-semibold">{cert.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">by {cert.issuer}</span>
              </div>
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                {cert.date && <span className="text-xs text-muted-foreground">{cert.date}</span>}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    View
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications;
