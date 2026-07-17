"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, Upload, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  mobile: z.string().min(8, "Valid mobile number is required"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Please provide more detail"),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  categories: { value: string; label: string }[]
  successMessage?: string
  submitLabel?: string
}

export function ContactForm({ categories, successMessage = "Thank you for your inquiry!", submitLabel = "Submit" }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    reset()
  }

  if (isSubmitSuccessful) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-500/20"
        >
          <CheckCircle2 className="text-white" size={36} />
        </motion.div>
        <p className="text-xl font-semibold text-brand-800 mb-2">Sent Successfully!</p>
        <p className="text-muted">{successMessage}</p>
      </motion.div>
    )
  }

  const inputClass = "w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 text-sm bg-white/80 transition-all duration-200"
  const errorClass = "text-red-500 text-xs mt-1.5 flex items-center gap-1"
  const labelClass = "block text-sm font-medium text-brand-800 mb-1.5"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>First Name *</label>
          <input {...register("firstName")} className={inputClass} placeholder="John" />
          {errors.firstName && <p className={errorClass}><span>•</span> {errors.firstName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input {...register("lastName")} className={inputClass} placeholder="Doe" />
          {errors.lastName && <p className={errorClass}><span>•</span> {errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input type="email" {...register("email")} className={inputClass} placeholder="john@example.com" />
          {errors.email && <p className={errorClass}><span>•</span> {errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Mobile *</label>
          <input type="tel" {...register("mobile")} className={inputClass} placeholder="+91 98765 43210" />
          {errors.mobile && <p className={errorClass}><span>•</span> {errors.mobile.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Category *</label>
        <select {...register("category")} className={inputClass + " bg-white"}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
        {errors.category && <p className={errorClass}><span>•</span> {errors.category.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Attachment</label>
        <div className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-border hover:border-accent-300 rounded-xl text-muted text-sm cursor-pointer transition-colors bg-white/50">
          <Upload size={16} className="text-accent-500" />
          <span>Upload file (optional) — PDF, DOC, or image</span>
        </div>
      </div>

      <div>
        <label className={labelClass}>Description *</label>
        <textarea
          {...register("description")}
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.description && <p className={errorClass}><span>•</span> {errors.description.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-500 disabled:from-accent-300 disabled:to-accent-300 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-accent-500/20"
      >
        <Send size={16} />
        {isSubmitting ? "Sending..." : submitLabel}
      </motion.button>
    </form>
  )
}
